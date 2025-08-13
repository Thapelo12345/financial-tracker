
const colors: string[] = [
  "blue",
  "cyan",
  "magenta",
  "orange",
  "purple",
  "teal",
  "indigo",
  "violet",
  "turquoise",
  "navy",
  "brown",
  "beige",
  "lavender",
  "gold",
  "plum",
  "tan",
  "peach",
  "amber",
  "midnightblue"
];

const alphabet: string[] = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

type Props = {
  name: string;
};

function getInitials(name: string): string {
  const words = name.trim().split(" ");
  const initials = words.length > 1 
    ? words[0][0] + words[words.length - 1][0] 
    : words[0][0];
  return initials.toUpperCase();
}


export default function Avatar({ name }: Props){
    return(
        <div
        className="shadow-lg rounded-full w-10 h-10 flex items-center justify-center border-4 border-white m-2"
        style={{ backgroundColor: colors[alphabet.indexOf(name[0].toUpperCase()) % colors.length] }}
        >
        <h1 className="text-md text-white font-bold">{getInitials(name)}</h1>

        </div>
    )
}