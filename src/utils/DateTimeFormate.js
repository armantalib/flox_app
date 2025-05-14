import moment from 'moment';
// import moment2 from 'moment-timezone'


export function time_Format(d) {
    // Hours, minutes and seconds
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}

export function set_CurrentMonthDate(req) {
    if (req == 'from') {
        var date23 = moment(new Date()).format('YYYY-MM');
        return date23 + '-01';
    } else {
        var date232 = moment(new Date()).format('YYYY-MM');
        var dateCu = date232 + '-01';
        var date23 = moment(dateCu).add('29', 'd').format('YYYY-MM-DD');

        return date23;
    }

}

export function set_CurrentDate() {
    var date23 = moment(new Date()).format('YYYY-MM-DD');
    return date23;
}

export function time_format(date) {
    if (global.time_format == 'h:i:sa') {
        var date23 = moment(date).format('hh:mm:sa');
        return date23;
    } else if (global.time_format == 'H:i:s') {
        var date23 = moment(date).format('HH:mm:s');
        return date23;
    } else {
        var date23 = moment(date).format('HH:mm');
        return date23;
    }
}
export function date_format(date) {
    if (global.date_format == 'd/m/Y') {
        var date23 = moment(date).format('DD/MM/YYYY');
        return date23;
    } else if (global.date_format == 'Y-m-d') {
        var date23 = moment(date).format('YYYY-MM-DD');
        return date23;
    } else {
        var date23 = moment(date).format('MM/DD/YYYY');
        return date23;
    }
}



export function date_time_both(date) {
    var formateDate = date_format(date);
    var formateTime = time_format(date);
    var dateTime = formateDate + ' ' + formateTime;
    return dateTime;
}

export function db_date_time(date) {
    var date23 = moment(date).format('YYYY-MM-DD hh:mm:ss');
    return date23;
}

export function week_start() {
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(curr.setDate(first)).toUTCString();
    var lastday = new Date(curr.setDate(last)).toUTCString();

    let objDate = {
        firstday: firstday,
        lastday: lastday
    }

    return objDate
}




