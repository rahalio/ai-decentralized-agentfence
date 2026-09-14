/**
 * Audits Query Hooks
 *
 * React Query hooks for fetching audits data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { auditsService } from "../audits.service";

/**
 * Hook to list audit events
 *
 * Query key: ["audits", "Event", ]
 */
export function useEvent(params?: Record<string, any>) {
  return useTenantQuery(
    ["audits", "Event", ],
    async (orgId: string, signal?: AbortSignal) => {
      return auditsService.getEvent(params, signal);
    }
  );
}

/**
 * Hook to get audit event
 *
 * Query key: ["audits", "Event", eventId]
 */
export function useEvent(eventId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["audits", "Event", eventId],
    async (orgId: string, signal?: AbortSignal) => {
      return auditsService.getEvent(eventId, params, signal);
    },
    {
      enabled: !!eventId
    }
  );
}
