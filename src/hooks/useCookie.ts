import React from 'react';

export const getCookie = (key: string) =>
    document.cookie.split('; ').reduce((total, currentCookie) => {
        const item = currentCookie.split('=');
        const storedKey = item[0];
        const storedValue = item[1];

        return key === storedKey ? decodeURIComponent(storedValue) : total;
    }, '');

const setItem = (key: string, value: string, numberOfDays: number) => {
    const now = new Date();
    now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);

    document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`;
};

/**
 *
 * @param {String} key The key to store our data to
 * @param {String} defaultValue The default value to return in case the cookie doesn't exist
 */

export const useCookie = (key: string, defaultValue: string) => {
    const Cookie = () => getCookie(key) || defaultValue;
    const [cookie, setCookie] = React.useState(Cookie());

    const updateCookie: any = (value: string, numberOfDays: number) => {
        setCookie(value);
        setItem(key, value, numberOfDays);
    };

    return [cookie, updateCookie];
};
