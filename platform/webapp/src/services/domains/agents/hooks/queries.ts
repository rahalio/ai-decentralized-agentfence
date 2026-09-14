/**
 * Agents Query Hooks
 *
 * React Query hooks for fetching agents data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { agentsService } from "../agents.service";

/**
 * Hook to list registered agent identities
 *
 * Query key: ["agents", "Agent", ]
 */
export function useAgent(params?: Record<string, any>) {
  return useTenantQuery(
    ["agents", "Agent", ],
    async (orgId: string, signal?: AbortSignal) => {
      return agentsService.getAgent(params, signal);
    }
  );
}

/**
 * Hook to list shadow-agent / marketplace id conflicts
 *
 * Query key: ["agents", "ShadowConflict", ]
 */
export function useShadowConflict(params?: Record<string, any>) {
  return useTenantQuery(
    ["agents", "ShadowConflict", ],
    async (orgId: string, signal?: AbortSignal) => {
      return agentsService.getShadowConflict(params, signal);
    }
  );
}

/**
 * Hook to get agent identity
 *
 * Query key: ["agents", "Agent", agentId]
 */
export function useAgent(agentId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["agents", "Agent", agentId],
    async (orgId: string, signal?: AbortSignal) => {
      return agentsService.getAgent(agentId, params, signal);
    },
    {
      enabled: !!agentId
    }
  );
}
