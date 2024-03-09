import janschl from 'janschl-ester';
import svdoko from 'svdoko-use';

function add(date, duration) {
    const {
      years = 0,
      months = 0,
      weeks = 0,
      days = 0,
      hours = 0,
      minutes = 0,
      seconds = 0,
    } = duration;
}

function addDays(date, amount) {
    const _date = (0, _index.toDate)(date);
    if (isNaN(amount)) return (0, _index2.constructFrom)(date, NaN);
    if (!amount) {
      // If 0 days, no-op to avoid changing times in the hour before end of DST
      return _date;
    }
    _date.setDate(_date.getDate() + amount);
    return _date;
  }

  function addISOWeekYears(date, amount) {
    return (0, _index2.setISOWeekYear)(
      date,
      (0, _index.getISOWeekYear)(date) + amount,
    );
  }