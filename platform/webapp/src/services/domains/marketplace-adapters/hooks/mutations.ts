/**
 * MarketplaceAdapters Mutation Hooks
 *
 * React Query hooks for mutating marketplace-adapters data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { marketplaceAdaptersService } from "../marketplace-adapters.service";
// TODO: Import types
// import type { ... } from "../marketplace-adapters.api-types";

/**
 * Hook to register a marketplace adapter
 *
 * Automatically invalidates marketplace-adapters queries on success.
 */
export function useCreateMarketplaceAdapter() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return marketplaceAdaptersService.createMarketplaceAdapter(data);
    },
    {
      invalidateQueries: [["marketplace-adapters", "MarketplaceAdapter"]],
    }
  );
}

/**
 * Hook to adapter acknowledges halt command
 *
 * Automatically invalidates marketplace-adapters queries on success.
 */
export function useGetHaltAck() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return marketplaceAdaptersService.getHaltAck(data);
    },
    {
      invalidateQueries: [["marketplace-adapters", "HaltAck"]],
    }
  );
}
