'use client';
import { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { GlassCard } from 'components/elements/cards';
import { OutlinedButton, FilledButton } from 'components/elements/buttons';
import { IntroductionData } from 'utils/constants/introdcationData';

import styles from './introduction.module.scss';

export default function Introduction(): JSX.Element {
    const [step, setStep] = useState<number>(0);
    const lengthOfIntroData = IntroductionData.length;

    useEffect(() => {
        const steps = setInterval(() => {
            setStep((prevStep) => (prevStep + 1) % lengthOfIntroData)
        }, 4500);
        return () => clearInterval(steps);
    }, [lengthOfIntroData]);


    return (
        <div className={styles.container}>
            <GlassCard>
                <div className={styles.layouts}>
                    <p className={styles.title}>{IntroductionData[step].title}</p>
                    <NextImage className={styles.image} src={IntroductionData[step].image} alt={IntroductionData[step].title} width={150} height={200} />
                    <p className={styles.description}>{IntroductionData[step].description}</p>
                    <div className={styles.progress}>
                        {
                            IntroductionData.map((_, index) => {
                                return (<div className={step == index ? styles.step : styles.circle}></div>
                                );
                            })
                        }
                    </div>
                    <div className={styles.button}>
                        <OutlinedButton text='Create Wallet' onClick={() => false} />
                        <FilledButton text='I have Wallet' onClick={() => false} />
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}