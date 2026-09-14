/**
 * AddOns Query Hooks
 *
 * React Query hooks for fetching add-ons data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { addOnsService } from "../add-ons.service";

/**
 * Hook to list add-on packages
 *
 * Query key: ["add-ons", "AddOn", ]
 */
export function useAddOn(params?: Record<string, any>) {
  return useTenantQuery(
    ["add-ons", "AddOn", ],
    async (orgId: string, signal?: AbortSignal) => {
      return addOnsService.getAddOn(params, signal);
    }
  );
}

/**
 * Hook to get add-on package
 *
 * Query key: ["add-ons", "AddOn", addOnId]
 */
export function useAddOn(addOnId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["add-ons", "AddOn", addOnId],
    async (orgId: string, signal?: AbortSignal) => {
      return addOnsService.getAddOn(addOnId, params, signal);
    },
    {
      enabled: !!addOnId
    }
  );
}
