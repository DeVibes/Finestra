'use client';
import { useTransition, animated } from "@react-spring/web";
import TransactionItem from "./TransactionItem";

const AnimatedTransactionList = ({ items, itemComponent: ItemComp }) => {
  const transition = useTransition(items, {
    trail: 100,
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-40px,0)" },
  });
  return (
    <div className="flex flex-col gap-2">
      {items.length > 0 &&
        transition((style, item) => (
          <animated.div style={style}>
            <TransactionItem transaction={item} />
          </animated.div>
        ))}
    </div>
  );
};

export default AnimatedTransactionList;
