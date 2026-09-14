/**
 * Agents Domain Facade
 *
 * High-level API for agents domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { agentsService } from "./agents.service";
// TODO: Import types
// import type { ... } from "./agents.api-types";

/**
 * Agents Facade
 *
 * High-level API for agents operations.
 * Components should use this facade instead of services directly.
 */
export const agentsFacade = {
  /**
   * List registered agent identities
   */
  async getAgent(...args: Parameters<typeof agentsService.getAgent>): Promise<any> {
    return agentsService.getAgent(...args);
  },

  /**
   * Register a cryptographically verifiable agent identity
   */
  async createAgent(...args: Parameters<typeof agentsService.createAgent>): Promise<any> {
    return agentsService.createAgent(...args);
  },

  /**
   * List shadow-agent / marketplace ID conflicts
   */
  async getShadowConflict(...args: Parameters<typeof agentsService.getShadowConflict>): Promise<any> {
    return agentsService.getShadowConflict(...args);
  },

  /**
   * Get agent identity
   */
  async getAgent(...args: Parameters<typeof agentsService.getAgent>): Promise<any> {
    return agentsService.getAgent(...args);
  },

  /**
   * Update agent metadata
   */
  async updateAgent(...args: Parameters<typeof agentsService.updateAgent>): Promise<any> {
    return agentsService.updateAgent(...args);
  },

  /**
   * Rotate agent runtime credentials
   */
  async getRotateCredential(...args: Parameters<typeof agentsService.getRotateCredential>): Promise<any> {
    return agentsService.getRotateCredential(...args);
  },

  /**
   * Map marketplace external IDs to canonical enterprise agent
   */
  async getMarketplaceId(...args: Parameters<typeof agentsService.getMarketplaceId>): Promise<any> {
    return agentsService.getMarketplaceId(...args);
  },

  /**
   * Suspend an unregistered or non-compliant agent
   */
  async getSuspend(...args: Parameters<typeof agentsService.getSuspend>): Promise<any> {
    return agentsService.getSuspend(...args);
  }
};
