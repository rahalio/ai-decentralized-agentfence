/**
 * Agents Mutation Hooks
 *
 * React Query hooks for mutating agents data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { agentsService } from "../agents.service";
// TODO: Import types
// import type { ... } from "../agents.api-types";

/**
 * Hook to register a cryptographically verifiable agent identity
 *
 * Automatically invalidates agents queries on success.
 */
export function useCreateAgent() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return agentsService.createAgent(data);
    },
    {
      invalidateQueries: [["agents", "Agent"]],
    }
  );
}

/**
 * Hook to update agent metadata
 *
 * Automatically invalidates agents queries on success.
 */
export function useUpdateAgent() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return agentsService.updateAgent(data);
    },
    {
      invalidateQueries: [["agents", "Agent"]],
    }
  );
}

/**
 * Hook to rotate agent runtime credentials
 *
 * Automatically invalidates agents queries on success.
 */
export function useGetRotateCredential() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return agentsService.getRotateCredential(data);
    },
    {
      invalidateQueries: [["agents", "RotateCredential"]],
    }
  );
}

/**
 * Hook to map marketplace external ids to canonical enterprise agent
 *
 * Automatically invalidates agents queries on success.
 */
export function useGetMarketplaceId() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return agentsService.getMarketplaceId(data);
    },
    {
      invalidateQueries: [["agents", "MarketplaceId"]],
    }
  );
}

/**
 * Hook to suspend an unregistered or non-compliant agent
 *
 * Automatically invalidates agents queries on success.
 */
export function useGetSuspend() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return agentsService.getSuspend(data);
    },
    {
      invalidateQueries: [["agents", "Suspend"]],
    }
  );
}
