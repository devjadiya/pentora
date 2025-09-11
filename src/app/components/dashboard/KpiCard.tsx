'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { KpiData } from '@/lib/threat-monitoring-data';

// This component displays a single Key Performance Indicator.
export default function KpiCard({ title, value, trend, trendType, Icon }: KpiData) {
    const trendConfig = {
        up: { icon: ArrowUp, color: 'text-red-400' },
        down: { icon: ArrowDown, color: 'text-green-400' },
        neutral: { icon: null, color: 'text-gray-400' },
    };
    
    const { icon: TrendIcon, color: trendColor } = trendConfig[trendType];

    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(124, 58, 237, 0.2)" }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            className="h-full"
        >
            <Card className="h-full bg-card/50 border-purple-900/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
                    <Icon className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-4xl font-bold font-headline text-white">{value}</div>
                    <div className={cn("text-xs flex items-center", trendColor)}>
                        {TrendIcon && <TrendIcon className="h-4 w-4 mr-1" />}
                        <span>{trend}</span>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

