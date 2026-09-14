/**
 * Audits Mutation Hooks
 *
 * React Query hooks for mutating audits data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { auditsService } from "../audits.service";
// TODO: Import types
// import type { ... } from "../audits.api-types";

/**
 * Hook to append an audit event (pep / runtime)
 *
 * Automatically invalidates audits queries on success.
 */
export function useGetEvent() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return auditsService.getEvent(data);
    },
    {
      invalidateQueries: [["audits", "Event"]],
    }
  );
}

/**
 * Hook to verify tamper-evident hash chain for an agent tree
 *
 * Automatically invalidates audits queries on success.
 */
export function useGetVerifyChain() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return auditsService.getVerifyChain(data);
    },
    {
      invalidateQueries: [["audits", "VerifyChain"]],
    }
  );
}
