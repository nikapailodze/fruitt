'use client'

import React, { ReactNode } from "react"
import { RecoilRoot } from "recoil"

interface Props{
    children: ReactNode,
}

export default function RecoilWrapper(props:Props){
    return (
        <RecoilRoot>
            {props.children}
        </RecoilRoot>
    )
}

