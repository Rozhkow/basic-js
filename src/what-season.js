module.exports = function getSeason(date) {
let message = 'Unable to determine the time of year!'
let winter = 'winter'
let spring = 'spring'
let summer = 'summer'
let autumn = 'autumn'

if (date == null) return message

if (date.getTime() == null || isNaN(date)) return 'Error'

let month = date.getUTCMonth()

if(month == 11 || month == 0 || month == 1) return winter
else if(month == 2 || month == 3 ||month == 4) return spring
else if(month == 5 || month == 6 ||month == 7) return summer
else if(month == 8 || month == 9 ||month == 10) return autumn
};
