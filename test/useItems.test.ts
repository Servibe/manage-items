import { describe, expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useItems } from "../src/hooks/useItems";

describe("useItems hook", () => {
  test("should add and remove items", () => {
    // Para hacer test de un Hook se le pasa la funcion del Hook que queremos comprobar
    const { result } = renderHook(() => useItems());

    // Esperamos que el result sea un Array vacio
    expect(result.current.items.length).toBe(0);

    // Aseguramos que esto es asincrono y se esta ejecutando añadir items
    act(() => {
      result.current.addItems("Jugar a videojuegos");
      result.current.addItems("Ir a correr");
    });

    // Verificamos que el result.current.items tenga 2 elementos
    expect(result.current.items.length).toBe(2);

    // Aseguramos que esto es asincrono y se esta ejecutando eliminar items
    act(() => {
      result.current.removeItem(result.current.items[0].id);
    });

    // Verificamos que el result.current.items tenga 1 elemento
    expect(result.current.items.length).toBe(1);
  });
});
