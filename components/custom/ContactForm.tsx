"use client"

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { sendMessages } from '@/lib/https.request';
import { toast } from '@/hooks/use-toast';

type FormValues = {
    email: string;
    phone: string;
    name: string;
    message: string;
};

const uzbekPhoneRegex = /^\+998(9[012345789]|6[1257]|7[01234569])\d{7}$/;

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        let msg = `🆕 Бесплатная консультация! \n`;
        msg += `📌 Имя/Фамилия: ${data?.name} \n`;
        msg += `📌 Номер телефона: ${data?.phone} \n`;
        msg += `📌 Почта: ${data?.email} \n`;
        msg += `📌 Сообщение: ${data?.message} \n`;


        sendMessages(msg)
            .then((res) => {
                if (res?.res.status === 200 || res?.res.status === 201) {
                    reset();
                    toast({
                        variant: 'default',
                        title: 'Спасибо за ваше обращение!',
                        description: 'Мы свяжемся с вами в ближайшее время',
                    })
                } else {
                    toast({
                        variant: 'destructive',
                        title: 'Что-то пошло не так',
                        description: 'Пожалуйста, повторите снова!',
                    })
                }
            })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full md:max-w-[60%] space-y-3 p-4rounded-lg">
            <div className='flex flex-col justify-center items-start gap-1'>
                <Input
                    placeholder="Name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full border border-clightgold rounded-3xl p-5 text-sm text-white bg-transparent"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className='flex flex-col justify-center items-start gap-1'>
                <Input
                    placeholder="Phone"
                    type="tel"
                    {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                            value: uzbekPhoneRegex,
                            message: 'Invalid Uzbekistan phone number',
                        },
                    })}
                    className="w-full border border-clightgold rounded-3xl p-5 text-sm text-white bg-transparent"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div className='flex flex-col justify-center items-start gap-1'>
                <Input
                    placeholder="Email"
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid email address',
                        },
                    })}
                    className="w-full border border-clightgold rounded-3xl p-5 text-sm text-white bg-transparent"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className='flex flex-col justify-center items-start gap-1'>
                <Textarea
                    placeholder="Message"
                    {...register('message', { required: 'Message is required' })}
                    className="w-full border border-clightgold rounded-3xl p-5 text-sm text-white bg-transparent"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <Button type="submit" className=" py-5 px-20 bg-cgold text-gray-900 rounded-lg hover:bg-cgold/80">
                Submit
            </Button>
        </form>
    );
};

export default ContactForm;
