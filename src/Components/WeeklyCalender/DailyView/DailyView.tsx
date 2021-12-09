import React from "react";
import { task } from "../../../Library/Interfaces";
import { filterTasksByDate } from "../../../Library/Helpers";

interface props {
    date: string;
    tasks: task[];
}

const DailyView: React.FC<props> = ({ date, tasks }) => {
    return (
        <div className="daily-detail-container">
            <h2>Hello World</h2>
        </div>
    );
};

export default DailyView;
