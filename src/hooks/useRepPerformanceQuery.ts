import { useQuery } from '@tanstack/react-query';
import { MOCK_PERFORMANCE_DATA } from '@/lib/mock-performance-data';
import { RepDailyStat, RepGoal, RepAlert } from '@/types/performance';

interface PerformanceData {
    reps: RepDailyStat[];
    goals: RepGoal[];
    alerts: RepAlert[];
    teamAverage: number;
}

export const useRepPerformanceQuery = () => {
    return useQuery<PerformanceData, Error>({
        queryKey: ['rep-performance', 'daily'],
        queryFn: async () => {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 800));
            return MOCK_PERFORMANCE_DATA;
        },
        refetchInterval: 60000,
    });
};
