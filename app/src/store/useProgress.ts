import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProgress, NodeProgress, NodeStatus, AttemptRecord, SettlementResult } from '../types';

interface ProgressStore extends UserProgress {
  // 初始化节点状态（首次访问时调用）
  initNode: (nodeId: string) => void;
  // 标记讲义已读
  markLectureRead: (nodeId: string) => void;
  // 记录一次做题会话结果
  recordAttempt: (nodeId: string, record: AttemptRecord, settlement: SettlementResult) => void;
  // 获取节点状态
  getNodeStatus: (nodeId: string) => NodeStatus;
  // 获取节点进度
  getNodeProgress: (nodeId: string) => NodeProgress | undefined;
  // 重置全部进度
  resetAll: () => void;
}

const defaultNodeProgress: NodeProgress = {
  status: 'available',
  firstVisitDone: false,
  attempts: [],
  weakTags: [],
  questionsAnswered: [],
};

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      nodeStates: {},

      initNode: (nodeId: string) => {
        const { nodeStates } = get();
        if (!nodeStates[nodeId]) {
          set({
            nodeStates: {
              ...nodeStates,
              [nodeId]: { ...defaultNodeProgress },
            },
          });
        }
      },

      markLectureRead: (nodeId: string) => {
        const { nodeStates } = get();
        set({
          nodeStates: {
            ...nodeStates,
            [nodeId]: {
              ...(nodeStates[nodeId] || defaultNodeProgress),
              firstVisitDone: true,
            },
          },
        });
      },

      recordAttempt: (nodeId: string, record: AttemptRecord, settlement: SettlementResult) => {
        const { nodeStates } = get();
        const current = nodeStates[nodeId] || { ...defaultNodeProgress };

        const newStatus: NodeStatus =
          settlement === 'perfect' ? 'upgraded' :
          settlement === 'cleared' ? 'cleared' :
          current.status === 'upgraded' ? 'upgraded' : // 已升级的不降级
          current.status === 'cleared' ? 'cleared' :   // 已通关的不降级
          'available';

        const newAnswered = [
          ...current.questionsAnswered,
          ...record.results.map(r => r.questionId),
        ];

        set({
          nodeStates: {
            ...nodeStates,
            [nodeId]: {
              ...current,
              status: newStatus,
              attempts: [...current.attempts, record],
              questionsAnswered: newAnswered,
            },
          },
        });
      },

      getNodeStatus: (nodeId: string): NodeStatus => {
        const { nodeStates } = get();
        return nodeStates[nodeId]?.status || 'available';
      },

      getNodeProgress: (nodeId: string): NodeProgress | undefined => {
        const { nodeStates } = get();
        return nodeStates[nodeId];
      },

      resetAll: () => set({ nodeStates: {} }),
    }),
    {
      name: 'conic-section-progress',
    }
  )
);
