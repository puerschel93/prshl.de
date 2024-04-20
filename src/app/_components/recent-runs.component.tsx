import { Run } from '@/components/run';
import { getRecentRuns } from '@/util/sanity';
import dayjs from 'dayjs';
import { Fragment, type FC } from 'react';
import type { Run as RunType } from 'types/sanity';

export const RecentRuns: FC = async () => {
    const runs = await getRecentRuns();

    const runsByYear = runs.reduce((acc, run) => {
        const year = dayjs(run.date).year();
        const accIndex = acc.findIndex((r) => r.year === year);
        if (accIndex === -1) {
            acc.push({ year, runs: [run] });
        } else {
            acc[accIndex]?.runs.push(run);
        }
        return acc;
    }, [] as { year: number; runs: RunType[] }[]);

    /** Render */
    return (
        <div className="flex flex-col">
            {runsByYear.map((yearSection) => (
                <Fragment key={yearSection.year.toFixed(2)}>
                    <h2 className="-mb-12 pt-12 text-primary-500 -translate-y-4 pointer-events-none">
                        {yearSection.year}
                    </h2>
                    {yearSection.runs.map((run) => {
                        return <Run run={run} key={run._id} />;
                    })}
                </Fragment>
            ))}
        </div>
    );
};
