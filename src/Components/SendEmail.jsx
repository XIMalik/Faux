import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SendEmail = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');
    
        try {
            const templateParams = {
                full_name: form.current.full_name.value,
                address: form.current.address.value,
                state: form.current.state.value,
                city: form.current.city.value,
                gender: form.current.gender.value,
                dob: form.current.dob.value,
                income: form.current.income.value,
                occupation: form.current.occupation.value,
                purpose: form.current.purpose.value,
                link: `https://faux-test.onrender.com${form.current.valid_id.value}`, // Assuming this is your image URL
            };
    
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
    
            setStatus('Email sent successfully!');
        } catch (error) {
            console.error('Error:', error);
            setStatus('Failed to send email. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
};

export default SendEmail;