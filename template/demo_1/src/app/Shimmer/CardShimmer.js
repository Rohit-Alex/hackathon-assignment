import React from 'react'
import { Skeleton } from "antd";

export const CardShimmerEffect = () => (
    <div style={{ height: '160px', marginRight: 20, width: '365px' }}>
    <Skeleton.Button active
            style={{
                // height: '100px',
                // width: '100px',
                marginBottom: 20,
                borderRadius: 8,
                display: "block",
            }}
        />
    </div>
)