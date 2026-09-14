/**
 * MarketplaceAdapters Query Hooks
 *
 * React Query hooks for fetching marketplace-adapters data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { marketplaceAdaptersService } from "../marketplace-adapters.service";

/**
 * Hook to list marketplace adapters
 *
 * Query key: ["marketplace-adapters", "MarketplaceAdapter", ]
 */
export function useMarketplaceAdapter(params?: Record<string, any>) {
  return useTenantQuery(
    ["marketplace-adapters", "MarketplaceAdapter", ],
    async (orgId: string, signal?: AbortSignal) => {
      return marketplaceAdaptersService.getMarketplaceAdapter(params, signal);
    }
  );
}

/**
 * Hook to get marketplace adapter
 *
 * Query key: ["marketplace-adapters", "MarketplaceAdapter", adapterId]
 */
export function useMarketplaceAdapter(adapterId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["marketplace-adapters", "MarketplaceAdapter", adapterId],
    async (orgId: string, signal?: AbortSignal) => {
      return marketplaceAdaptersService.getMarketplaceAdapter(adapterId, params, signal);
    },
    {
      enabled: !!adapterId
    }
  );
}

/**
 * Hook to partner attestation verifier (read-only)
 *
 * Query key: ["marketplace-adapters", "PartnerAttestation", agentId]
 */
export function usePartnerAttestation(agentId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["marketplace-adapters", "PartnerAttestation", agentId],
    async (orgId: string, signal?: AbortSignal) => {
      return marketplaceAdaptersService.getPartnerAttestation(agentId, params, signal);
    },
    {
      enabled: !!agentId
    }
  );
}
