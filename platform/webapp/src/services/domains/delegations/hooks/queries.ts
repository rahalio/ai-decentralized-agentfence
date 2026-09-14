/**
 * Delegations Query Hooks
 *
 * React Query hooks for fetching delegations data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { delegationsService } from "../delegations.service";

/**
 * Hook to list delegation edges
 *
 * Query key: ["delegations", "Delegation", ]
 */
export function useDelegation(params?: Record<string, any>) {
  return useTenantQuery(
    ["delegations", "Delegation", ],
    async (orgId: string, signal?: AbortSignal) => {
      return delegationsService.getDelegation(params, signal);
    }
  );
}

/**
 * Hook to get delegation graph rooted at an agent
 *
 * Query key: ["delegations", "Graph", ]
 */
export function useGraph(params?: Record<string, any>) {
  return useTenantQuery(
    ["delegations", "Graph", ],
    async (orgId: string, signal?: AbortSignal) => {
      return delegationsService.getGraph(params, signal);
    }
  );
}

/**
 * Hook to get delegation edge
 *
 * Query key: ["delegations", "Delegation", delegationId]
 */
export function useDelegation(delegationId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["delegations", "Delegation", delegationId],
    async (orgId: string, signal?: AbortSignal) => {
      return delegationsService.getDelegation(delegationId, params, signal);
    },
    {
      enabled: !!delegationId
    }
  );
}

/**
 * Hook to preview inherited spend/depth/audit context
 *
 * Query key: ["delegations", "Inheritance", delegationId]
 */
export function useInheritance(delegationId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["delegations", "Inheritance", delegationId],
    async (orgId: string, signal?: AbortSignal) => {
      return delegationsService.getInheritance(delegationId, params, signal);
    },
    {
      enabled: !!delegationId
    }
  );
}
