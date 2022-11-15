const DiscountBadge = ({ discountType, discountValue, className }) => {
  return (
    <div className={`${className || ""} discountBadge`} data-testid="badge">
      {discountType === "percentage off" && <b>{discountValue} % off</b>}
      {discountType === "fixed amount off" && <b>$ {discountValue} off</b>}
    </div>
  );
};

export default DiscountBadge;
