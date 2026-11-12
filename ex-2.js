// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;
let hasPromotion;
// lastMonthPaidMoreThan4000>4000 isWeekday===mon-friday hasBoughtProductFromITCategory===เคยซื้้อ 
// hasAttendedDiscountEvent ===เคยเข้าร่วม isPlatinum===สมาชิกระดับแพลตตินั่ม hasPromotion===ได้รับส่วนลด
hasAttendedDiscountEvent = true;
isWeekday = true;
hasBoughtProductFromITCategory = false;
hasAttendedDiscountEvent = true;
hasPromotion = false;
hasPromotion = hasAttendedDiscountEvent && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent || hasPromotion;

console.log(hasPromotion);