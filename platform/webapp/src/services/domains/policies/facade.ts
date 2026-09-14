/**
 * Policies Domain Facade
 *
 * High-level API for policies domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { policiesService } from "./policies.service";
// TODO: Import types
// import type { ... } from "./policies.api-types";

/**
 * Policies Facade
 *
 * High-level API for policies operations.
 * Components should use this facade instead of services directly.
 */
export const policiesFacade = {
  /**
   * List autonomy policies
   */
  async getPolicy(...args: Parameters<typeof policiesService.getPolicy>): Promise<any> {
    return policiesService.getPolicy(...args);
  },

  /**
   * Create an autonomy policy draft
   */
  async createPolicy(...args: Parameters<typeof policiesService.createPolicy>): Promise<any> {
    return policiesService.createPolicy(...args);
  },

  /**
   * Runtime PEP allow/deny decision
   */
  async createEvaluate(...args: Parameters<typeof policiesService.createEvaluate>): Promise<any> {
    return policiesService.createEvaluate(...args);
  },

  /**
   * Simulate PEP decision without side effects
   */
  async getSimulate(...args: Parameters<typeof policiesService.getSimulate>): Promise<any> {
    return policiesService.getSimulate(...args);
  },

  /**
   * Grant a one-time HITL exception (logged)
   */
  async getException(...args: Parameters<typeof policiesService.getException>): Promise<any> {
    return policiesService.getException(...args);
  },

  /**
   * Get autonomy policy
   */
  async getPolicy(...args: Parameters<typeof policiesService.getPolicy>): Promise<any> {
    return policiesService.getPolicy(...args);
  },

  /**
   * Update autonomy policy draft
   */
  async updatePolicy(...args: Parameters<typeof policiesService.updatePolicy>): Promise<any> {
    return policiesService.updatePolicy(...args);
  },

  /**
   * Publish policy for runtime enforcement
   */
  async getPublish(...args: Parameters<typeof policiesService.getPublish>): Promise<any> {
    return policiesService.getPublish(...args);
  }
};
