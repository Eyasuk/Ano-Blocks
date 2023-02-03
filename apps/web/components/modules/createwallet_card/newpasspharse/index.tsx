'use client';
import { useState, useEffect, useRef } from 'react';
import { CopyOutlined, DownloadOutlined } from '@ant-design/icons';
import { GlassCard } from 'components/elements/cards';
import { OutlinedButton, FilledButton, IconButton, } from 'components/elements/buttons';
import {generatePassPhrase} from 'utils/services/wallet/generateMnemonic';
import {downloadFile} from 'utils/helpers/downloadfile';

import styles from './newpassphrase.module.scss';

export default function Introduction(): JSX.Element {
    const [passphrase,setPassphrase] = useState<string[]>([]);
    const passphraseFetchedRef = useRef<boolean | null>(false);

    useEffect(()=>{
        if((passphraseFetchedRef.current)) return;
        passphraseFetchedRef.current = true ;
        const temp  =   generatePassPhrase(); 
        setPassphrase(temp);
    },[])
    
    const downloadPassPhrase= ()=>{
       downloadFile(passphrase,'ano',true);
    }

    return (
        <div className={styles.container}>
            <GlassCard>
                <div className={styles.layouts}>
                    <p className={styles.title}>Create Wallet</p>
                    <p className={styles.description}> Make Sure You copy a passphrase and store it in Safe Place! Fund Can not be recovered with out passphrase!!</p>
                    <div className={styles.passphrase}>
                        {passphrase.map((content, index) => {
                            return (
                                <div className={styles.wordinputfield} key={index}>
                                    <p className={styles.index}>{index + 1 + '.'}</p>
                                    <p className={styles.content}>{content}</p>
                                </div>)
                        })}
                    </div>
                    <div className={styles.button}>
                        <span className={styles.icons}>
                            <IconButton icon={<DownloadOutlined />} onClick={downloadPassPhrase} />
                        </span>
                        <OutlinedButton text='Next' onClick={() => true} />
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}