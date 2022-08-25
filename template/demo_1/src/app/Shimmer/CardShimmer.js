import React from 'react'
import { Skeleton } from "antd";

export const CardShimmerEffect = () => (
    <Skeleton.Input active className='card-shimmer'
            style={{
                // height: '100px',
                // width: '100px',
                marginBottom: 20,
                borderRadius: 8,
                display: "block",
            }}
        />
)