/**
 * AddOns Mutation Hooks
 *
 * React Query hooks for mutating add-ons data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { addOnsService } from "../add-ons.service";
// TODO: Import types
// import type { ... } from "../add-ons.api-types";

/**
 * Hook to submit add-on for attestation review
 *
 * Automatically invalidates add-ons queries on success.
 */
export function useCreateAddOn() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return addOnsService.createAddOn(data);
    },
    {
      invalidateQueries: [["add-ons", "AddOn"]],
    }
  );
}

/**
 * Hook to approve and allowlist add-on
 *
 * Automatically invalidates add-ons queries on success.
 */
export function useCreateApprove() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return addOnsService.createApprove(data);
    },
    {
      invalidateQueries: [["add-ons", "Approve"]],
    }
  );
}

/**
 * Hook to revoke allowlist status
 *
 * Automatically invalidates add-ons queries on success.
 */
export function useGetRevoke() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return addOnsService.getRevoke(data);
    },
    {
      invalidateQueries: [["add-ons", "Revoke"]],
    }
  );
}

/**
 * Hook to force unload add-on from agent runtimes
 *
 * Automatically invalidates add-ons queries on success.
 */
export function useGetUnload() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return addOnsService.getUnload(data);
    },
    {
      invalidateQueries: [["add-ons", "Unload"]],
    }
  );
}
