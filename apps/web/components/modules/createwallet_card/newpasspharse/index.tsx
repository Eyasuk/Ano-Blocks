'use client';
import { useState, useEffect } from 'react';
import { CopyOutlined, DownloadOutlined } from '@ant-design/icons';
import { GlassCard } from 'components/elements/cards';
import { OutlinedButton, FilledButton, IconButton, } from 'components/elements/buttons';

import styles from './newpassphrase.module.scss';

export default function Introduction(): JSX.Element {
    const a = ['b', 'd', 'b', 's', 'd', 'q', 'b', 'd', 's', 'f', 'g', 'd',]

    return (
        <div className={styles.container}>
            <GlassCard>
                <div className={styles.layouts}>
                    <p className={styles.title}>Create Wallet</p>
                    <p className={styles.description}> Make Sure You copy a passphrase and store it in Safe Place! Fund Can not be recovered with out passphrase!!</p>
                    <div className={styles.passphrase}>
                        {a.map((content, index) => {
                            return (
                                <div className={styles.box}>
                                    <p className={styles.index}>{index + 1 + '.'}</p>
                                    <p className={styles.content}>{content}</p>
                                </div>)
                        })}
                    </div>
                    <div className={styles.button}>
                        <span className={styles.icons}>
                            <IconButton icon={<CopyOutlined />} onClick={() => false} />
                            <IconButton icon={<DownloadOutlined />} onClick={() => false} />
                        </span>
                        <OutlinedButton text='Next' onClick={() => true} />
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}