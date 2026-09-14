/**
 * Reporting Mutation Hooks
 *
 * React Query hooks for mutating reporting data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { reportingService } from "../reporting.service";
// TODO: Import types
// import type { ... } from "../reporting.api-types";

/**
 * Hook to create a period report
 *
 * Automatically invalidates reporting queries on success.
 */
export function useCreateReport() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return reportingService.createReport(data);
    },
    {
      invalidateQueries: [["reporting", "Report"]],
    }
  );
}
