'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { alertsBySeverityData } from '@/lib/threat-monitoring-data';

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-2 rounded-lg border bg-card/80 backdrop-blur-sm text-xs shadow-lg">
                <p className="font-bold text-white">{`${payload[0].name}: ${payload[0].value.toLocaleString()}`}</p>
            </div>
        );
    }
    return null;
};

// A pie chart showing the distribution of alerts by severity.
export default function AlertsBySeverityChart() {
    return (
        <Card className="h-full bg-card/50 border-purple-900/50 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="text-lg font-bold text-white">Alerts by Severity</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px] pb-6">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(139, 92, 246, 0.1)' }}/>
                        <Pie
                            data={alertsBySeverityData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            nameKey="name"
                        >
                            {alertsBySeverityData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
                            ))}
                        </Pie>
                         <Legend iconType="circle" formatter={(value) => <span className="text-muted-foreground">{value}</span>}/>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

