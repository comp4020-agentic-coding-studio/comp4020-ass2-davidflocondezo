import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

describe("Assignment 2 brief compliance", () => {
  it("sums assessment weights to exactly 100", () => {
    const assessments = api.nodes.filter((node) => node.type === "assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("covers weeks 1-12 exactly once each in sessions", () => {
    const weeks = api.nodes
      .filter((node) => node.type === "sessions")
      .map((node) => Number(node.meta?.week));
    expect(weeks.sort((a, b) => a - b)).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("covers weeks 1-12 exactly once each in lectures", () => {
    const weeks = api.nodes
      .filter((node) => node.type === "lectures")
      .map((node) => Number(node.meta?.week));
    expect(weeks.sort((a, b) => a - b)).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("builds at least one lecture's slides into a real deck page", () => {
    const withSlides = api.nodes.filter(
      (node) => node.type === "lectures" && typeof node.meta?.slides === "string",
    );
    expect(withSlides.length).toBeGreaterThan(0);
    for (const node of withSlides) {
      const slidesPath = node.meta?.slides as string;
      const deckHtml = resolve("dist", slidesPath.replace(/^\//, ""), "index.html");
      expect(existsSync(deckHtml), `${node.id} points at ${slidesPath}, but ${deckHtml} was not built`).toBe(
        true,
      );
    }
  });
});
