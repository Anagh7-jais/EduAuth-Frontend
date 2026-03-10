type Props = {
  className?: string;
};

export const BellIcon = ({ className }: Props) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3C9.79086 3 8 4.79086 8 7V8.31086C8 8.96963 7.76691 9.60879 7.34168 10.1135L5.41421 12.4142C4.52331 13.488 5.28765 15.1429 6.70711 15.1429H17.2929C18.7123 15.1429 19.4767 13.488 18.5858 12.4142L16.6583 10.1135C16.2331 9.60879 16 8.96963 16 8.31086V7C16 4.79086 14.2091 3 12 3Z"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M10 16C10 17.1046 10.8954 18 12 18C13.1046 18 14 17.1046 14 16"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

