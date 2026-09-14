/**
 * Reporting Query Hooks
 *
 * React Query hooks for fetching reporting data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { reportingService } from "../reporting.service";

/**
 * Hook to get compliance export bundle
 *
 * Query key: ["reporting", "Compliance", ]
 */
export function useCompliance(params?: Record<string, any>) {
  return useTenantQuery(
    ["reporting", "Compliance", ],
    async (orgId: string, signal?: AbortSignal) => {
      return reportingService.getCompliance(params, signal);
    }
  );
}

/**
 * Hook to list generated reports
 *
 * Query key: ["reporting", "Report", ]
 */
export function useReport(params?: Record<string, any>) {
  return useTenantQuery(
    ["reporting", "Report", ],
    async (orgId: string, signal?: AbortSignal) => {
      return reportingService.getReport(params, signal);
    }
  );
}

/**
 * Hook to get period report
 *
 * Query key: ["reporting", "Report", reportId]
 */
export function useReport(reportId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["reporting", "Report", reportId],
    async (orgId: string, signal?: AbortSignal) => {
      return reportingService.getReport(reportId, params, signal);
    },
    {
      enabled: !!reportId
    }
  );
}
