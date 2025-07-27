"use client"
import React, { useEffect, useState } from "react";

const Timer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        if (difference <= 0) return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            expired: false,
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            const newTime = calculateTimeLeft();
            setTimeLeft(newTime);

            if (newTime.expired) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const format = (num) => String(num).padStart(2, "0");

    const AnimatedDigit = ({ digit }) => (
        <div className="relative w-8 h-10 overflow-hidden">
            <div className="absolute animate-slide-down text-2xl font-bold text-black">
                {digit}
            </div>
        </div>
    );

    const TimeBlock = ({ label, value }) => (
        <div className="flex flex-col items-center">
            <div className="flex space-x-1">
                {format(value).split('').map((d, idx) => (
                    <AnimatedDigit key={idx} digit={d} />
                ))}
            </div>
            <span className="text-sm text-gray-500 mt-1">{label}</span>
        </div>
    );

    if (timeLeft.expired) {
        return (
            <div className="flex justify-center items-center p-4 text-red-600 text-2xl font-bold">
                Discount expired
            </div>
        );
    }

    return (
        <div className="flex space-x-4 justify-center items-center p-4">
            <TimeBlock label="Days" value={timeLeft.days} />
            <span className="text-2xl text-red-400">:</span>
            <TimeBlock label="Hours" value={timeLeft.hours} />
            <span className="text-2xl text-red-400">:</span>
            <TimeBlock label="Minutes" value={timeLeft.minutes} />
            <span className="text-2xl text-red-400">:</span>
            <TimeBlock label="Seconds" value={timeLeft.seconds} />
        </div>
    );
};

export default Timer;
