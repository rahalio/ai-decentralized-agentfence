/**
 * Policies Mutation Hooks
 *
 * React Query hooks for mutating policies data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { policiesService } from "../policies.service";
// TODO: Import types
// import type { ... } from "../policies.api-types";

/**
 * Hook to create an autonomy policy draft
 *
 * Automatically invalidates policies queries on success.
 */
export function useCreatePolicy() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return policiesService.createPolicy(data);
    },
    {
      invalidateQueries: [["policies", "Policy"]],
    }
  );
}

/**
 * Hook to runtime pep allow/deny decision
 *
 * Automatically invalidates policies queries on success.
 */
export function useCreateEvaluate() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return policiesService.createEvaluate(data);
    },
    {
      invalidateQueries: [["policies", "Evaluate"]],
    }
  );
}

/**
 * Hook to simulate pep decision without side effects
 *
 * Automatically invalidates policies queries on success.
 */
export function useGetSimulate() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return policiesService.getSimulate(data);
    },
    {
      invalidateQueries: [["policies", "Simulate"]],
    }
  );
}

/**
 * Hook to grant a one-time hitl exception (logged)
 *
 * Automatically invalidates policies queries on success.
 */
export function useGetException() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return policiesService.getException(data);
    },
    {
      invalidateQueries: [["policies", "Exception"]],
    }
  );
}

/**
 * Hook to update autonomy policy draft
 *
 * Automatically invalidates policies queries on success.
 */
export function useUpdatePolicy() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return policiesService.updatePolicy(data);
    },
    {
      invalidateQueries: [["policies", "Policy"]],
    }
  );
}

/**
 * Hook to publish policy for runtime enforcement
 *
 * Automatically invalidates policies queries on success.
 */
export function useGetPublish() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return policiesService.getPublish(data);
    },
    {
      invalidateQueries: [["policies", "Publish"]],
    }
  );
}
