export const dateToBangla = (dateStr, isHour) => {
  const date = new Date(dateStr);
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  const monthName = months[month];

  if (day < 10) {
    day = '0' + day;
  }

  if (hour < 10) {
    hour = '0' + hour;
  }

  if (minute < 10) {
    minute = '0' + minute;
  }

  let formattedDate;
  if (isHour) {
    formattedDate = monthName + ' ' + day + ', ' + year + ', ' + hour + ':' + minute;
  } else {
    formattedDate = monthName + ' ' + day + ', ' + year;
  }

  const strObj = { '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯', '0': '০', 'January': 'জানুয়ারী', 'February': 'ফেব্রুয়ারী', 'March': 'মার্চ', 'April': 'এপ্রিল', 'May': 'মে', 'June': 'জুন', 'July': 'জুলাই', 'August': 'আগস্ট', 'September': 'সেপ্টেম্বর', 'October': 'অক্টোবর', 'November': 'নভেম্বর', 'December': 'ডিসেম্বর', 'Saturday': 'শনিবার', 'Sunday': 'রবিবার', 'Monday': 'সোমবার', 'Tuesday': 'মঙ্গলবার', 'Wednesday': 'বুধবার', 'Thursday': 'বৃহস্পতিবার', 'Friday': 'শুক্রবার' };
  const convertedDate = formattedDate.replace(/1|2|3|4|5|6|7|8|9|0|January|February|March|April|May|June|July|August|September|October|November|December|Saturday|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday/gi, function(matched){
    return strObj[matched];
  });

  return convertedDate;
}

export const numberToBangla = (number) => {
  const formattedNumber = number.toString();

  const strObj = { '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯', '0': '০' };
  const convertedNumber = formattedNumber.replace(/1|2|3|4|5|6|7|8|9|0/gi, function(matched){
    return strObj[matched];
  });

  return convertedNumber;
}