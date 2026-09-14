/**
 * Reporting Domain Facade
 *
 * High-level API for reporting domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { reportingService } from "./reporting.service";
// TODO: Import types
// import type { ... } from "./reporting.api-types";

/**
 * Reporting Facade
 *
 * High-level API for reporting operations.
 * Components should use this facade instead of services directly.
 */
export const reportingFacade = {
  /**
   * Get compliance export bundle
   */
  async getCompliance(...args: Parameters<typeof reportingService.getCompliance>): Promise<any> {
    return reportingService.getCompliance(...args);
  },

  /**
   * List generated reports
   */
  async getReport(...args: Parameters<typeof reportingService.getReport>): Promise<any> {
    return reportingService.getReport(...args);
  },

  /**
   * Create a period report
   */
  async createReport(...args: Parameters<typeof reportingService.createReport>): Promise<any> {
    return reportingService.createReport(...args);
  },

  /**
   * Get period report
   */
  async getReport(...args: Parameters<typeof reportingService.getReport>): Promise<any> {
    return reportingService.getReport(...args);
  }
};
