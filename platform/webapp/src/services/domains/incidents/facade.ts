/**
 * Incidents Domain Facade
 *
 * High-level API for incidents domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { incidentsService } from "./incidents.service";
// TODO: Import types
// import type { ... } from "./incidents.api-types";

/**
 * Incidents Facade
 *
 * High-level API for incidents operations.
 * Components should use this facade instead of services directly.
 */
export const incidentsFacade = {
  /**
   * List incidents
   */
  async getIncident(...args: Parameters<typeof incidentsService.getIncident>): Promise<any> {
    return incidentsService.getIncident(...args);
  },

  /**
   * Open an incident
   */
  async createIncident(...args: Parameters<typeof incidentsService.createIncident>): Promise<any> {
    return incidentsService.createIncident(...args);
  },

  /**
   * Get incident
   */
  async getIncident(...args: Parameters<typeof incidentsService.getIncident>): Promise<any> {
    return incidentsService.getIncident(...args);
  },

  /**
   * Close an incident
   */
  async getClose(...args: Parameters<typeof incidentsService.getClose>): Promise<any> {
    return incidentsService.getClose(...args);
  },

  /**
   * Attach post-mortem notes and export refs
   */
  async getPostMortem(...args: Parameters<typeof incidentsService.getPostMortem>): Promise<any> {
    return incidentsService.getPostMortem(...args);
  }
};
