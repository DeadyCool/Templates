import React, { useState, useEffect } from 'react';

function addSeconds(numOfSeconds, date = new Date()) {
     
    const [date, setSeconds] = useState(null);

    const setSeconds = () => {
        date.setSeconds(date.getSeconds() + numOfSeconds);
        return date;
    }

    return date;

    return {
        setSeconds: saveToken,
        date
    }
}
