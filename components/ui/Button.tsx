type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "outline";
};
export default function Button({ children, variant }: ButtonProps) {
  let buttonStyle = "";
  if (variant === "primary") {
    buttonStyle =
      "bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition ";
  } else if (variant === "secondary") {
    buttonStyle =
      "bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition";
  } else if (variant === "outline") {
    buttonStyle =
      "bg-transparent border border-green-600 text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-green-600 hover:text-white transition";
  }
  return <button className={buttonStyle}>{children}</button>;
}
