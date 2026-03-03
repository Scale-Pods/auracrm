export type StageId = "lead" | "qualified" | "proposal" | "negotiation" | "won";

export interface RepDailyStat {
    id: string;
    userId: string;
    repName: string;
    avatar?: string;
    statDate: string;

    callsTotal: number;
    callsOutbound: number;
    callsInbound: number;
    avgCallDurationSecs: number;

    meetingsScheduled: number;
    meetingsCompleted: number;
    followupsCompleted: number;
    newLeadsContacted: number;

    dealsStageAdvanced: number;
    dealsWon: number;
    dealsLost: number;
    revenueClosed: number;

    activityCompletionRate: number;
    productivityScore: number;
    callToMeetingRate: number;
    meetingToProposalRate: number;
    proposalToWinRate: number;
    revenuePerCall: number;
    revenuePerMeeting: number;

    dailyRank: number;
    rankDelta: number;
    momentum7d: number;
}

export interface RepGoal {
    id: string;
    userId: string;
    period: "daily" | "weekly" | "monthly";
    goalType: string; // e.g. "calls_total", "revenue_closed"
    targetValue: number;
}

export interface RepAlert {
    id: string;
    userId: string;
    alertType: "zero_activity_3pm" | "below_threshold" | "daily_summary" | "high_performer";
    payload: string;
    resolved: boolean;
    createdAt: string;
}
