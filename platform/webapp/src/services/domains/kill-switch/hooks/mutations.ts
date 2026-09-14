/**
 * KillSwitch Mutation Hooks
 *
 * React Query hooks for mutating kill-switch data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { killSwitchService } from "../kill-switch.service";
// TODO: Import types
// import type { ... } from "../kill-switch.api-types";

/**
 * Hook to invoke kill-switch containment
 *
 * Automatically invalidates kill-switch queries on success.
 */
export function useCreateOrder() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return killSwitchService.createOrder(data);
    },
    {
      invalidateQueries: [["kill-switch", "Order"]],
    }
  );
}

/**
 * Hook to dual-control arm step before execute
 *
 * Automatically invalidates kill-switch queries on success.
 */
export function useGetArm() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return killSwitchService.getArm(data);
    },
    {
      invalidateQueries: [["kill-switch", "Arm"]],
    }
  );
}

/**
 * Hook to record marketplace adapter halt acknowledgement
 *
 * Automatically invalidates kill-switch queries on success.
 */
export function useGetAck() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return killSwitchService.getAck(data);
    },
    {
      invalidateQueries: [["kill-switch", "Ack"]],
    }
  );
}
