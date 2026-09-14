/**
 * KillSwitch Query Hooks
 *
 * React Query hooks for fetching kill-switch data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { killSwitchService } from "../kill-switch.service";

/**
 * Hook to list kill-switch orders
 *
 * Query key: ["kill-switch", "Order", ]
 */
export function useOrder(params?: Record<string, any>) {
  return useTenantQuery(
    ["kill-switch", "Order", ],
    async (orgId: string, signal?: AbortSignal) => {
      return killSwitchService.getOrder(params, signal);
    }
  );
}

/**
 * Hook to get kill-switch order status
 *
 * Query key: ["kill-switch", "Order", orderId]
 */
export function useOrder(orderId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["kill-switch", "Order", orderId],
    async (orgId: string, signal?: AbortSignal) => {
      return killSwitchService.getOrder(orderId, params, signal);
    },
    {
      enabled: !!orderId
    }
  );
}

/**
 * Hook to preview blast radius (delegation tree)
 *
 * Query key: ["kill-switch", "BlastRadiu", orderId]
 */
export function useBlastRadiu(orderId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["kill-switch", "BlastRadiu", orderId],
    async (orgId: string, signal?: AbortSignal) => {
      return killSwitchService.getBlastRadiu(orderId, params, signal);
    },
    {
      enabled: !!orderId
    }
  );
}
