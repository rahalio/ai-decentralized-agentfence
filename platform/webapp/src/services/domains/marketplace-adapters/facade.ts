/**
 * MarketplaceAdapters Domain Facade
 *
 * High-level API for marketplace-adapters domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { marketplaceAdaptersService } from "./marketplace-adapters.service";
// TODO: Import types
// import type { ... } from "./marketplace-adapters.api-types";

/**
 * MarketplaceAdapters Facade
 *
 * High-level API for marketplace-adapters operations.
 * Components should use this facade instead of services directly.
 */
export const marketplaceAdaptersFacade = {
  /**
   * List marketplace adapters
   */
  async getMarketplaceAdapter(...args: Parameters<typeof marketplaceAdaptersService.getMarketplaceAdapter>): Promise<any> {
    return marketplaceAdaptersService.getMarketplaceAdapter(...args);
  },

  /**
   * Register a marketplace adapter
   */
  async createMarketplaceAdapter(...args: Parameters<typeof marketplaceAdaptersService.createMarketplaceAdapter>): Promise<any> {
    return marketplaceAdaptersService.createMarketplaceAdapter(...args);
  },

  /**
   * Get marketplace adapter
   */
  async getMarketplaceAdapter(...args: Parameters<typeof marketplaceAdaptersService.getMarketplaceAdapter>): Promise<any> {
    return marketplaceAdaptersService.getMarketplaceAdapter(...args);
  },

  /**
   * Adapter acknowledges halt command
   */
  async getHaltAck(...args: Parameters<typeof marketplaceAdaptersService.getHaltAck>): Promise<any> {
    return marketplaceAdaptersService.getHaltAck(...args);
  },

  /**
   * Partner attestation verifier (read-only)
   */
  async getPartnerAttestation(...args: Parameters<typeof marketplaceAdaptersService.getPartnerAttestation>): Promise<any> {
    return marketplaceAdaptersService.getPartnerAttestation(...args);
  }
};
