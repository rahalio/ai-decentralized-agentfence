/**
 * Incidents Mutation Hooks
 *
 * React Query hooks for mutating incidents data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { incidentsService } from "../incidents.service";
// TODO: Import types
// import type { ... } from "../incidents.api-types";

/**
 * Hook to open an incident
 *
 * Automatically invalidates incidents queries on success.
 */
export function useCreateIncident() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return incidentsService.createIncident(data);
    },
    {
      invalidateQueries: [["incidents", "Incident"]],
    }
  );
}

/**
 * Hook to close an incident
 *
 * Automatically invalidates incidents queries on success.
 */
export function useGetClose() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return incidentsService.getClose(data);
    },
    {
      invalidateQueries: [["incidents", "Close"]],
    }
  );
}

/**
 * Hook to attach post-mortem notes and export refs
 *
 * Automatically invalidates incidents queries on success.
 */
export function useGetPostMortem() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return incidentsService.getPostMortem(data);
    },
    {
      invalidateQueries: [["incidents", "PostMortem"]],
    }
  );
}
