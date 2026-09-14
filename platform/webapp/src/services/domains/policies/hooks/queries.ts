/**
 * Policies Query Hooks
 *
 * React Query hooks for fetching policies data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { policiesService } from "../policies.service";

/**
 * Hook to list autonomy policies
 *
 * Query key: ["policies", "Policy", ]
 */
export function usePolicy(params?: Record<string, any>) {
  return useTenantQuery(
    ["policies", "Policy", ],
    async (orgId: string, signal?: AbortSignal) => {
      return policiesService.getPolicy(params, signal);
    }
  );
}

/**
 * Hook to get autonomy policy
 *
 * Query key: ["policies", "Policy", policyId]
 */
export function usePolicy(policyId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["policies", "Policy", policyId],
    async (orgId: string, signal?: AbortSignal) => {
      return policiesService.getPolicy(policyId, params, signal);
    },
    {
      enabled: !!policyId
    }
  );
}
