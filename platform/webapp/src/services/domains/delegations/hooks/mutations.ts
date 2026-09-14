/**
 * Delegations Mutation Hooks
 *
 * React Query hooks for mutating delegations data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { delegationsService } from "../delegations.service";
// TODO: Import types
// import type { ... } from "../delegations.api-types";

/**
 * Hook to record parent→child delegation (spawn)
 *
 * Automatically invalidates delegations queries on success.
 */
export function useCreateDelegation() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return delegationsService.createDelegation(data);
    },
    {
      invalidateQueries: [["delegations", "Delegation"]],
    }
  );
}
