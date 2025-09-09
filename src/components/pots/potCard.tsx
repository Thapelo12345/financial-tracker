import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { openCloseDialog } from "../../state management/openCloseDialog";
import { getMessage } from "../../state management/dialogMessage";
import { selectDialog } from "../../state management/selectDialog";
import { appUpdated } from "../../state management/UpdateAllComponents";
import gsap from "gsap";

type Props = {
  title: string;
  amount: number;
  getAmount: (value: number) => void;
};

export default function PotsCard({ title, amount, getAmount }: Props) {
  const dispatch = useDispatch();
  const [openInput, setOpenInput] = useState(false);
  const [changeAmount, setChangeAmount] = useState(amount);

  useGSAP(() => {
    gsap.fromTo(
      ".potsCard",
      {
        scale: 0.1,
        opacity: 0.2,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        stagger: 0.4,
      }
    );
  });

  //function to update pots data base in firestore
  async function updatePotValue(potTitle: string, newAmount: number) {
    const data = sessionStorage.getItem("currentUser");
    let newPotValue: number = 0;

    if (data) {
      const user = JSON.parse(data);

      try {
        
        const allUsers = await getDocs(collection(db, "users"));
        const matchUser = allUsers.docs.find((doc) => {
          const userData = doc.data();
          return userData.email === user.email;
        });

        if (!matchUser) {
          dispatch(getMessage("Sorry cant find your user account"));
          dispatch(selectDialog("error"));
          dispatch(openCloseDialog());
        } 
        else {

          if(potTitle === "Gift cards") {
              user.gifCard = newAmount;
              newPotValue += newAmount + user.savings + user.vouchers
              await updateDoc(matchUser.ref, {
                giftCard: newAmount,
              });
            }//end of first if

            else if(potTitle === "Savings"){
              user.savings = newAmount;
              newPotValue += newAmount + user.giftCard + user.vouchers
              await updateDoc(matchUser.ref, {
                savings: newAmount,
              });
          }//end of first else if

          else if(potTitle === "Voucher"){
              user.vouchers = newAmount;
              newPotValue += newAmount + user.giftCard + user.savings
              await updateDoc(matchUser.ref, {
                vouchers: newAmount,
              });
             }//end of last else if

          user.potsValue = newPotValue

          await updateDoc(matchUser.ref, {
            potsValue: newPotValue,
          });

          sessionStorage.setItem("currentUser", JSON.stringify(user));
          dispatch(appUpdated());
        } //end of else
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <motion.div
      className="potsCard flex flex-col items-start sm:item-center w-[170px] sm:w-40 h-[15%] bg-white m-2 p-2  rounded-md"
      style={{
        backgroundImage: "linear-gradient(0deg, black, rgba(0, 0, 0, 0.2))",
      }}
      whileHover={{
        boxShadow: "1px 3px 30px green",
        border: "1px solid lime",
        backgroundImage: "linear-gradient(0deg, darkgreen, lightgreen)",
        textShadow: "1px 1px 2px black",
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        bounce: 0.5,
        duration: 1.5,
      }}
      onClick={() => {
        if (!openInput) {
          setOpenInput(true);
        }
      }}
    >
      <label className="text-center text-white font-bold"> {title} </label>
      {!openInput && <data className="text-white font-bold">R {amount}</data>}

      {openInput && (
        <div className=" flex flex-row items-center w-full overflow-hidden">
          <input
            className="text-xs p-1 bg-[whitesmoke] w-[80%] m-1 rounded-md focus:outline-0"
            style={{
              boxShadow: "inset 2px 2px 2px black, inset -5px -5px 5px white",
            }}
            placeholder="Amount"
            value={changeAmount}
            onChange={(e) => {
              setChangeAmount(Number(e.target.value));
            }}
          ></input>
          <motion.button
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              type: "tween",
              ease: "linear",
            }}
            onClick={() => {
              setOpenInput(false);
              getAmount(changeAmount);
              updatePotValue(title, changeAmount);
            }}
          >
            <ArrowPathIcon className="w-5 h-5 text-green-500" />
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}
