import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const graphTransaction = [
  {
    description: "Entertainment",
    transactionAmount: 54.78,
    color: "pink",
  },
  {
    description: "Bills",
    transactionAmount: 74.78,
    color: "lime",
  },
  {
    description: "Dining out",
    transactionAmount: 244.43,
    color: "cyan",
  },
  {
    description: "Personal care",
    transactionAmount: 80.7,
    color: "purple",
  },
];

export default function GraphDetails() {
  useGSAP(() => {
  const items = gsap.utils.toArray(".details-animation");

  items.forEach((item, i) => {
    const tl = gsap.timeline({ delay: i * 0.3 }); 

    // Slide in
    tl.fromTo(item as HTMLElement,
      { x: -600 },
      { x: 0, duration: 0.8, ease: "circ.out" }
    )

    .fromTo(item as HTMLElement,
      { rotateY: 90 },
      { rotateY: 0, duration: 3.4, ease: "circ.out" },
      "-=0.3" 
    );
  });
});


  return (
    <div className="flex flex-wrap rounded-sm items-center justify-start w-full overflow-x-hidden overflow-y-auto p-2 m-2">
      {graphTransaction.map((transaction) => (
        <div
          key={transaction.description}
          className="details-animation flex flex-row items-center justify-evenly h-8 bg-white  p-2 shadow-lg m-2"
        >
         <div 
         className="border-4 h-full m-2"
         style={{
          borderColor: transaction.color,
          backgroundColor: transaction.color,
          perspective: 1000
        }}
         ></div>
          <h4 className="text-black text-sm font-normal">{transaction.description}</h4>
        </div>
      ))}
    </div>
  );
}
